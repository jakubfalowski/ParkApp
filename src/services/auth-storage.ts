const KEY = "__token__";

function get(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function set(token: string) {
  try {
    localStorage.setItem(KEY, token);
  } catch {
    // noop
  }
}

function clear() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // noop
  }
}

export const authStorage = { get, set, clear, key: KEY };
