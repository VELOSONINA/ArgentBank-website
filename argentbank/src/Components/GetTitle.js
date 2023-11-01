import { useEffect } from 'react';

export default function GetTitle({title}) {
  useEffect(() => {
    document.title = `Argent Bank - ${title}`;
  }, [title]);
}