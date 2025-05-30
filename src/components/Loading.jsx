const Loading = () => {
	return (
		<div className="bg-white p-5 rounded shadow-sm w-100 text-center" style={{ maxWidth: 600 }}>
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Carregando...</span>
			</div>
			<p className="mt-3">Gerando seu roteiro com ajuda da IA...</p>
		</div>
	)
}
export default Loading;