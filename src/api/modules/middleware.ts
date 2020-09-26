export function validateUser(req, res, next) {
  return (req.user)
    ? next()
    : res.json({ code: 401, message: 'Unauthorized' });
}