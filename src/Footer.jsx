function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-gray-50 shadow-inner">
      <div className="max-w-4xl mx-auto py-3 px-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700">Joni Kahari</span> —
          Kaikki oikeudet pidätetään
        </p>
      </div>
    </footer>
  );
}

export default Footer;
