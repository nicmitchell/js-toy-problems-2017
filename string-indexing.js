/*
String indexing: Keep track of which web URLs have been visited.
 */

function searchTrie(node, string) {
  if (string === null) {
    return true;
  }

  const char = string.charAt(0);
  const remaining = string.slice(1) || null;

  if (node[char]) {
    return searchTrie(node[char], remaining);
  }

  return false;
}

function addURL(node, url) {

  let char = url.charAt(0);
  let remaining = url.slice(1) || null;

  if (!node[char]) {
    return insertString(node, remaining);
  }
}

function insertString(node, string) {
  if (string === null) {
    return true;
  }
  let char = string.charAt(0);
  let remaining = string.slice(1) || null
  if (!node[char]) {
    node[char] = {};
  }
  return insertString(node[char], remaining);
}
