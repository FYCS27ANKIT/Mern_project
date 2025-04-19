import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
