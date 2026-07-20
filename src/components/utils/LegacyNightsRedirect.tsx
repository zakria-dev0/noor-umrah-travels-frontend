import { useParams, Navigate } from 'react-router-dom';

interface Props {
  view: 'haram-view' | 'kaaba-view';
}

// Redirects old /packages/haram-view/:nights and /packages/kaaba-view/:nights
// links to the new /packages/5-star/:view/:nights-nights structure.
const LegacyNightsRedirect: React.FC<Props> = ({ view }) => {
  const { nights } = useParams<{ nights: string }>();
  return <Navigate to={`/packages/5-star/${view}/${nights}-nights`} replace />;
};

export default LegacyNightsRedirect;
