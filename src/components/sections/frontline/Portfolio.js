import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'video', name: 'Video Production' },
    { id: 'photo', name: 'Photography' },
    { id: 'event', name: 'Event Coverage' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Funeral Procession',
      category: 'event',
      type: 'video',
      thumbnail: '/images/funeral.jpg',
      videoUrl: 'https://www.youtube.com/embed/3vqz_CG1yGo',
      description: 'Full coverage of the full event with multi-camera setup and live streaming.',
      client: 'Tom Oyuya Inc.',
      duration: '2 days',
      deliverables: ['Event Video', 'Photography', 'Live Stream', 'Social Media Clips']
    },
    {
      id: 2,
      title: 'church service',
      category: 'commercial',
      type: 'video',
      thumbnail: '/images/kitere.jpg',
      videoUrl: 'https://www.youtube.com/embed/DxS3zP3HzuY',
      description: 'High-end church service streaming and trails  and cinematic sequences.',
      client: 'Kitere sda church',
      duration: '1 weeks',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
    {
      id: 3,
      title: 'Video shooting',
      category: 'video',
      type: 'video',
      thumbnail: '/images/anoi.png',
      videoUrl:  'https://www.youtube.com/embed/TnDTQDKaPFE',
      description: 'High-end video quolity that brings everything into detail trails  and cinematic sequences.',
      client: 'Annointed gospel ministers',
      duration: '2 weeks',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
   
     {
      id: 3,
      title: 'Video shooting',
      category: 'video',
      type: 'video',
      thumbnail: '/images/nyosi.png',
      videoUrl:  'https://www.youtube.com/embed/7qk8q6PqiU8',
      description: 'High-end video quolity that brings everything into detail trails  and cinematic sequences',
      client: 'Nyosia AY',
      duration: '3 weeks',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
      {
      id: 3,
      title: 'Video shooting',
      category: 'video',
      type: 'video',
      thumbnail: '/images/iber.png',
      videoUrl: 'https://www.youtube.com/embed/_YtpTNaiNDM',
      description: 'High-end video quolity that brings everything into detail trails  and cinematic sequences.',
      client: 'Radienya Girls',
      duration: '1 weeks',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
       {
      id: 3,
      title: 'Video shooting',
      category: 'video',
      type: 'video',
      thumbnail: '/images/nyad.png',
      videoUrl: 'https://www.youtube.com/embed/lIEVX-lpovU',
      description: 'High-end video quolity that brings everything into detail trails  and cinematic sequences.',
      client: 'kanyadgiro chorale',
      duration: '2 weeks',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
          {
      id: 3,
      title: 'Video shooting',
      category: 'video',
      type: 'video',
      thumbnail: '/images/rusda.png',
      videoUrl: 'https://www.youtube.com/embed/qn09WrMduJw',
      description: 'High-end video quolity that brings everything into detail trails  and cinematic sequences.',
      client: 'Rongo university church',
      duration: '2 weeks',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
      {
      id: 3,
      title: 'Photography',
      category: 'photo',
      type: 'photo',
      thumbnail: '/images/photo.jpg',
      // videoUrl: 'https://www.youtube.com/embed/qn09WrMduJw',
      description: 'High-end picture quolity that brings everything into detail trails  and cinematic sequences.',
      client: 'Studio $ Outdoor',
      duration: '24 hrs',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
      {
      id: 3,
      title: 'Photography',
      category: 'photo',
      type: 'photo',
      thumbnail: '/images/alb1.jpg',
      // videoUrl: 'https://www.youtube.com/embed/qn09WrMduJw',
      description: 'High-end picture quolity that brings everything into detail trails  and cinematic sequences.',
      client: 'Studio $ Outdoor',
      duration: '24 hrs',
      deliverables: ['60s Commercial', 'Social Media Ads', 'Behind the Scenes', 'Photography']
    },
    // ... other projects with similar structure
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handlePlayVideo = (projectId) => {
    setPlayingVideo(projectId);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we bring creative visions to life through professional media production.
          </p>
        </motion.div>

        {/* Filter Buttons - unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Filter size={16} />
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - updated with thumbnail display */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Thumbnail with Play Button */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    {project.type === 'video' && (
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
                      {filters.find(f => f.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Project Info - unchanged */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.client}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal - updated with iframe */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => {
                setSelectedProject(null);
                setPlayingVideo(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setPlayingVideo(null);
                    }}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Project Media - Updated with iframe */}
                  <div className="aspect-video bg-black">
                    {selectedProject.type === 'video' && selectedProject.videoUrl ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={selectedProject.videoUrl}
                        title={`${selectedProject.title} video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full aspect-video"
                      />
                    ) : (
                      <img 
                        src={selectedProject.thumbnail} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Project Details - unchanged */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedProject.description}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                        {filters.find(f => f.id === selectedProject.category)?.name}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Project Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Client:</span>
                            <span className="font-semibold text-gray-900 dark:text-white">{selectedProject.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                            <span className="font-semibold text-gray-900 dark:text-white">{selectedProject.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Service:</span>
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              {selectedProject.type === 'video' ? 'Video Production' : 'Photography'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Deliverables</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedProject.deliverables.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;