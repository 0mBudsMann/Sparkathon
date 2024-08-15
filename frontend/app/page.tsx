import Link from 'next/link';
import Card from '../components/CardComponent';
import { Button } from '@nextui-org/react';
import { UploadCloudIcon } from 'lucide-react';

export default function Home() {
  return (
    <div style={{"backgroundColor":"white", "height": "100vh"}}>
      <header className="header">
        <div className="left-section">
          <img className="hamburger-logo" src="/icons/hamburger-menu.svg" alt="Menu" />
          <img className="youtube-logo" src="/icons/youtube-logo.svg" alt="YouTube Logo" />
        </div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">
            <img className="search-icon" src="/icons/search.svg" alt="Search" />
            <div className="tooltip">Search</div>
          </button>
          <button className="voice-search-button">
            <img className="voice-search-icon" src="/icons/voice-search-icon.svg" alt="Voice Search" />
            <div className="tooltip">Search with your voice</div>
          </button>
        </div>
        <div className="right-section">
          <div className="upload-icon-container">
            <img className="upload-icon" src="/icons/upload.svg" alt="Upload" />
            <div className="tooltip">Create</div>
          </div>
          <div className="youtube-apps-icon-container">
            <img className="youtube-apps-icon" src="/icons/youtube-apps.svg" alt="YouTube Apps" />
            <div className="tooltip">YouTube Apps</div>
          </div>
          <div className="notifications-icon-container">
            <img className="notifications-icon" src="/icons/notifications.svg" alt="Notifications" />
            <div className="notifications-count">3</div>
            <div className="tooltip">Notifications</div>
          </div>
          <img className="current-user-picture-icon" src="/channel-pictures/my-channel.jpg" alt="User" />
        </div>
      </header>
      <nav className="sidebar">
      <SidebarLink icon="/icons/home.svg" label={<span style={{ color: 'black' }}>Home</span>} />
<SidebarLink icon="/icons/explore.svg" label={<span style={{ color: 'black' }}>Explore</span>} />
<SidebarLink icon="/icons/subscriptions.svg" label={<span style={{ color: 'black' }}>Subscriptions</span>} />
<SidebarLink icon="/icons/originals.svg" label={<span style={{ color: 'black' }}>Originals</span>} />
<SidebarLink icon="/icons/youtube-music.svg" label={<span style={{ color: 'black' }}>YouTube Music</span>} />
<SidebarLink icon="/icons/library.svg" label={<span style={{ color: 'black' }}>Library</span>} />

      </nav>
      <main>
        <Card></Card>
      </main>
    </div>
  );
}

const SidebarLink = ({ icon, label }) => (
  <div className="sidebar-link">
    <img src={icon} alt={label} />
    <div>{label}</div>
  </div>
);

const VideoPreview = ({ video }) => (
  <div className="video-preview">
    <div className="thumbnail-row">
      <a href={video.link} target="_blank" className="video-title-link" rel="noopener noreferrer">
        <img className="thumbnail" src={video.thumbnail} alt={video.title} />
      </a>
      <div className="video-time">{video.duration}</div>
    </div>
    <div className="video-info-grid">
      <div className="channel-picture">
        <div className="profile-picture-container">
          <a href={video.channelLink} target="_blank" className="channel-link" rel="noopener noreferrer">
            <img className="profile-picture" src={video.channelImage} alt={video.channelName} />
          </a>
          <div className="channel-tooltip">
            <img className="channel-tooltip-picture" src={video.channelImage} alt={video.channelName} />
            <div className="channel-info-tooltip">
              <p className="channel-tooltip-name">{video.channelName}</p>
              <p className="channel-tooltip-stats">{video.subscribers} subscribers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-info">
        <a href={video.link} target="_blank" className="video-title-link" rel="noopener noreferrer">
          <p className="video-title">{video.title}</p>
        </a>
        <a href={video.channelLink} target="_blank" className="channel-link" rel="noopener noreferrer">
          <p className="video-author">{video.channelName}</p>
        </a>
        <p className="video-stats">{video.views} views &#183; {video.uploaded}</p>
      </div>
    </div>
  </div>
);

const videos = [
  {
    title: 'Talking Tech and AI with Google CEO Sundar Pichai!',
    link: 'https://www.youtube.com/watch?v=n2RNcPRtAiY',
    thumbnail: '/thumbnails/thumbnail-1.webp',
    duration: '14:20',
    channelName: 'Marques Brownlee',
    channelLink: 'https://www.youtube.com/c/mkbhd',
    channelImage: '/channel-pictures/channel-1.jpeg',
    subscribers: '16.6M',
    views: '3.4M',
    uploaded: '6 months ago',
  },
  // Add more video objects here
];
