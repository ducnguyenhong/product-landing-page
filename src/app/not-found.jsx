import { NotFound } from '@/components/common';
import { getMetadata } from '@/utils/meta-data';

export const metadata = getMetadata();

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
