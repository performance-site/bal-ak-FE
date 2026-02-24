let id = Number(import.meta.env.VITE_DEFAULT_PERFORMANCE_ID);

if (isNaN(id)) {
  id = 1;
}

export const PERFORMANCE_ID = id;
