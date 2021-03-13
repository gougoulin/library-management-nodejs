var key = new byte[32]();
RNGCryptoServiceProvider.Create().GetBytes(key);
var base64Secret = Convert.ToBase64String(key);
// make safe for url
var urlEncoded = base64Secret.TrimEnd("=").Replace("+", "-").Replace("/", "_");

urlEncoded.Dump();
