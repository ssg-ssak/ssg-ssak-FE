'use client'

import React from 'react'
import Script from "next/script";
import { useEffect, useRef } from "react";
import { Coordinates } from '@/types/mylounge/store';
import { NaverMap } from '@/types/mylounge/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from "@/components/hooks/useMap";

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
      const mapOptions = {
          center: new window.naver.maps.LatLng(...initialCenter),
          zoom: initialZoom,
          minZoom: 9,
          scaleControl: false,
          mapDataControl: false,
          logoControlOptions: {
              position: naver.maps.Position.BOTTOM_LEFT,
          },
      };
      //새로운 네이버 맵 인스턴스 생성 
      const map = new window.naver.maps.Map(mapId, mapOptions);
      mapRef.current = map;

      if (onLoad) {
          onLoad(map);
      }
          // maker 찍는 함수
    const position = new naver.maps.LatLng(35.169870, 129.128285);

    const markerOptions = {
      position: position,
      map: mapRef.current,
      icon: {
          url: '/images/mylounge/mkshin.png',
          size: new naver.maps.Size(80, 100),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(15, 15)
      }
  };
  
    const marker = new naver.maps.Marker(markerOptions);
  };

  
  //맵이 unmount되었을 때 맵 인스턴스 destory하기 
  useEffect(() => {
      return () => {
          mapRef.current?.destroy();
      };
  }, []);



  return (
      <>
          <Script
              strategy="afterInteractive"
              type = "text/javascript"
              src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=szhuj44cwv"
              onReady = {initializeMap}
          />
          <div id = {mapId} className='w-full h-[800px]'/>
      </>
  )
}

export default Map

/* import React from 'react'
import Script from 'next/script';

function findstore() {
    new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
});

  return (
    <div className='mt-[106px]'>
      <Script strategy="beforeInteractive" type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=szhuj44cwv" />
      <div id="map" className="w-full h-[280px]" />
    </div>
  )
}

export default findstore */
