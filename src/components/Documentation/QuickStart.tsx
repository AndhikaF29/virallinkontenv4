export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="start">
      <h3 className=" text-white text-2xl font-semibold mt-8">Mulai Cepat</h3>
      <div className="p-6 rounded-md border mt-6 border-dark_border border-opacity-60">
        <h6 className="text-white text-lg font-medium">1. Persyaratan</h6>
        <p className="text-base font-medium text-muted text-opacity-60">
          Sebelum melanjutkan, Anda perlu memiliki{" "}
          <a href="https://nodejs.org/" className="text-primary">
            node.js
          </a>{" "}
          versi terbaru yang stabil
        </p>
        <h6 className="mt-4 mb-2 text-white font-medium text-base">
          Lingkungan yang disarankan:
        </h6>
        <ul className="list-disc text-muted text-opacity-60 ps-6">
          <li>node js 20+</li>
          <li>npm js 10+</li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border border-opacity-60">
        <h6 className="text-white text-lg font-medium">2. Instalasi</h6>
        <p className="text-base font-medium text-muted text-opacity-60">
          Buka folder paket dan install dependensinya. Kami merekomendasikan
          yarn atau npm.{" "}
        </p>
        <h6 className="mt-4 mb-2 text-white text-dark font-medium text-base">
          1) Install dengan npm:
        </h6>
        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-gray-400">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="text-sm text-gray-400 mt-2">npm install</p>
        </div>
        <h6 className="mt-4 mb-2 text-white text-dark font-medium text-base">
          2) Install dengan yarn:
        </h6>
        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-gray-400">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="text-sm text-gray-400 mt-2">yarn install</p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border border-opacity-60">
        <h6 className="text-white text-lg font-medium">3. Jalankan</h6>
        <p className="text-base font-medium text-muted text-opacity-60 mb-4">
          Setelah npm install selesai, sekarang Anda dapat menjalankan aplikasi.
        </p>

        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-gray-400">npm run dev or yarn run dev</p>
        </div>
        <p className="text-base font-medium text-muted text-opacity-60 my-4">
          Perintah ini akan memulai server web lokal{" "}
          <span className="dark:text-white">http://localhost:3000:</span>
        </p>
        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-gray-400">
            {"> crypgo_project@0.1.0 dev"}
          </p>
          <p className="text-sm text-gray-400 mt-1">{"> next dev"}</p>
          <p className="text-sm text-gray-400 mt-6">{"-Next.js 14.2.4"}</p>
          <p className="text-sm text-gray-400 mt-1">
            {"-Local: http://localhost:3000"}
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border border-opacity-60">
        <h6 className="text-white text-lg font-medium">
          4. Build / Deployment
        </h6>
        <p className="text-base font-medium text-muted text-opacity-60 mb-4">
          Setelah menambahkan URL, jalankan perintah di bawah untuk build
          aplikasi.
        </p>

        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-gray-400">npm run build or yarn build</p>
        </div>
        <p className="text-base font-medium text-muted text-opacity-60 mt-6">
          Selesai! Website Anda siap untuk di-deploy.🥳
        </p>
      </div>
    </div>
  );
};
