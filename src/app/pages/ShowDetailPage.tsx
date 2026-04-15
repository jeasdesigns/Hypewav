import { useParams } from 'react-router';
import { AppLayout } from '../components/AppLayout';
import { ShowDetailContent } from '../components/ShowDetailContent';

export function ShowDetailPage() {
  const { id } = useParams();

  return (
    <AppLayout showBottomNav={true}>
      <ShowDetailContent showId={id!} />
    </AppLayout>
  );
}
