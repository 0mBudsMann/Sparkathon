import React from 'react';
import { list } from '@vercel/blob';
import Link from 'next/link';

export default async function CardComponent() {
  const { blobs } = await list({ mode: 'folded', prefix: 'videos/' });
  const { blobs: thumbnails } = await list({ mode: 'folded', prefix: '.thumbnail/' });

  return (
    <div className='grid grid-cols-3 gap-8'>  
      {blobs &&
        blobs.map(({ pathname, url, size, uploadedAt }) => (
          <Link
            href={{
              pathname: '/stream',
              query: {
                url: url,
                pathname: pathname,
                size: size,
                uploadedAt: uploadedAt.toLocaleString(),
              },
            }}
            key={pathname}
            className="video-preview"
          >
            <div className="thumbnail-row">
              <img
                className="thumbnail"
                src={thumbnails?.find(
                  (blob) =>
                    blob.pathname ===
                    `.thumbnail/${pathname
                      .split('/')
                      .pop()
                      ?.split('.')
                      ?.at(-2)}.png`
                )?.url}
                alt="om"
              />
              <div className="video-time">{"2"}</div>
            </div>
            <div className="video-info-grid">
              <div className="channel-picture">
                <div className="profile-picture-container">
                  <img
                    className="profile-picture"
                    src={"https://picsum.photos/id/237/200/300"}
                    alt={"Om's"}
                  />
                  <div className="channel-tooltip">
                    <img
                      className="channel-tooltip-picture"
                      src={"https://picsum.photos/id/237/200/300"}
                      alt={"om's"}
                    />
                    <div className="channel-info-tooltip">
                      <p className="channel-tooltip-name">{"oms"}</p>
                      <p className="channel-tooltip-stats">{44} subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-info">
                <p className="video-title">
                  {pathname.split('/').pop()?.split('.')?.at(-2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
