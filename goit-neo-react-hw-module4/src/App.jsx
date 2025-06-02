import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import { fetchImages } from './services/unsplashApi';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(false);
  };

  useEffect(() => {
    if (!query) return;

    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
      } catch (err) {
        setError(true);
        toast.error('Error fetching images');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [query, page]);

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={setSelectedImage} />
          {!loading && <LoadMoreBtn onClick={loadMore} />}
        </>
      )}
      {loading && <Loader />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default App;