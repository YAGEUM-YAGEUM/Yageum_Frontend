'use client';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { Coordinates } from '@/types/map';
import { NaverMap } from '@/types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/map/useMap';
import styled from 'styled-components';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
const MapContainer = styled.div`
  height: 100vh;
`;
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
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.LARGE,
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    //새로운 네이버 맵 인스턴스 생성
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;
    console.log(map, '응응');

    if (onLoad) {
      onLoad(map);
    }
  };

  //맵이 unmount되었을 때 맵 인스턴스 destory하기
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <MapContainer>
        <Script
          strategy="afterInteractive"
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=avfdtt8jyq`}
          onReady={initializeMap}
        />
        <div
          id={mapId}
          style={{ width: 'calc(100vw - 400px)', height: '100%' }}
        ></div>
      </MapContainer>
    </>
  );
};
export default Map;
