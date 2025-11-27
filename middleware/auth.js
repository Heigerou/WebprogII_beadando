const BASE_PATH = '/app161';

export function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash('error', 'K�rj�k, jelentkezz be!');
  res.redirect(`${BASE_PATH}/auth/login`);
}

export function ensureRole(role) {
  return (req, res, next) => {
    if (
      req.isAuthenticated() &&
      (req.user.role === role || req.user.role === 'admin')
    )
      return next();

    req.flash('error', 'Nincs jogosults�god.');
    res.redirect(`${BASE_PATH}/`);
  };
}
