import { atom, map } from 'nanostores';

export const meta = map<Record<string, Meta>>({});

export const referrer = atom<string | undefined>();
export const message = atom<string | undefined>();
