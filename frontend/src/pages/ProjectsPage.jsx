import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ProjectsSection from '../components/ProjectsSection';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <ProjectsSection limit={100} />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default ProjectsPage;
