import { useNavigate, useParams } from 'react-router-dom';
import antiPatternsFiles from '../../../anti-patterns';
import { TAntiPatternsItem } from '../../../components/AntiPatternsList/types';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

const data = antiPatternsFiles as TAntiPatternsItem[];

const useDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const antiPatternsData = data.filter(
    (item) => item.name.toLocaleLowerCase() === id?.toLocaleLowerCase()
  )[0];
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    document.title = antiPatternsData.name;
  }, []);

  return {
    isOpen,
    onToggle,
    onOpen,
    onClose,
    navigate,
    antiPatternsData,
  };
};

export default useDetails;
