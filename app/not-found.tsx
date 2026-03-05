export default function NotFound() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '60vh',
				gap: '16px',
				padding: '40px 20px',
				textAlign: 'center',
			}}
		>
			<h1 style={{ fontSize: '48px', fontWeight: 800, margin: 0 }}>404</h1>
			<p style={{ fontSize: '17px', color: '#4A4A4A', margin: 0 }}>
				Page not found
			</p>
			<a
				href='/'
				style={{
					color: '#C41E2A',
					fontSize: '14px',
					fontWeight: 600,
					textDecoration: 'none',
				}}
			>
				← Back to Home
			</a>
		</div>
	);
}
