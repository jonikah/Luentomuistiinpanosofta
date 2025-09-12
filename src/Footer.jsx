// Alatunnistekomponentti
function Footer() {
  return (
    // Kiinnitetty footer näytön alareunaan
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-gray-50 shadow-inner">
      {/* Sisältö keskitetty ja rajattu leveys */}
      <div className="max-w-4xl mx-auto py-3 px-4 text-center">
        {/* Teksti: copyright + nimi */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700">Joni Kahari</span>
        </p>
      </div>
    </footer>
  );
}

// Viedään komponentti käyttöön muualle sovelluksessa
export default Footer;
