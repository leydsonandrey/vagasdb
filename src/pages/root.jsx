      <main className="flex justify-center p-5 bg-neutral-950">
        <div className="responsive-width">
          <nav className="flex flex-row gap-5 mb-5">
            <NavButton link="/" name="Empresas" />
            <NavButton link="/sites-de-vagas" name="Sites de Vagas" />
          </nav>
          <Outlet />
        </div>
      </main>
