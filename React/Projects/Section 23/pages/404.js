import React from 'react';
import Link from 'next/link';

export default function Custom404() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p><Link href="/"><a>Go back?</a></Link></p>
        </div>
    )
  }