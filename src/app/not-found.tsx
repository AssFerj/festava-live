import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Página Não Encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado.</p>
      <Link href="/">Retornar para a Home</Link>
    </div>
  );
}
