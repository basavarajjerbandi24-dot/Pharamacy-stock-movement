import React from 'react';
import ImageSections from './ImageSectionComp';
import AuthSection from './AuthSection';
import './main-content.css'
function MainContent() {
  return (
    <main className="main-content">
      <ImageSections />
      <AuthSection />
    </main>
  );
}

export default MainContent;