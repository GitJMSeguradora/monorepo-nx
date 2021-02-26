import jwtDecode from 'jwt-decode';

export default function decode(token) {
  return jwtDecode(token);
}
