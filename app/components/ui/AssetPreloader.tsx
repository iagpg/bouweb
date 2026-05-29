'use client';

import { useEffect } from 'react';

const VIDEO_ASSETS = ['/new.mp4'];

export default function AssetPreloader() {
  useEffect(() => {
    const videos = VIDEO_ASSETS.map((src) => {
      const video = document.createElement('video');

      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.src = src;
      video.load();

      return video;
    });

    return () => {
      videos.forEach((video) => {
        video.removeAttribute('src');
        video.load();
      });
    };
  }, []);

  return null;
}
