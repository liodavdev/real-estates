function Video() {
  return (
    <article className="w-full h-2/3 relative">
      <video className="w-full h-full object-cover" loop autoPlay muted>
        <source src="/src/assets/videos/landing_md.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full absolute left-0 top-0 flex items-end pb-9 bg-dark/60">
        <h1 className="text-3xl p-3 text-light bg-dark/30">
          TU VENTANA A LAS MEJORES PROPIEDADES INMOBILIARIAS
        </h1>
      </div>
    </article>
  );
}

export default Video;
