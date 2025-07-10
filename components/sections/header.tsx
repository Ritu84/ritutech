'use client';
import { GlobalContext } from '@/context/global-context';
import Link from 'next/link';
import React, { useContext } from 'react';


const SOCIALS: { name: string; link: string }[] = [
  { name: 'GitHub', link: 'https://github.com/Ritu84' },
  { name: 'X', link: 'https://x.com/SharmaRitu69' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ritu-sharma-a2580222a/' },
  // { name: 'Substack', link: 'https://adarshjaiss.substack.com/' },
  { name: 'Mail', link: 'mailto:Rsharma114962@gmail.com' },
  { name: 'Resume', link: ' https://drive.google.com/file/d/1dfQtB_TRg1twChR6CKTwbcFzvyQgyAsU/view?usp=sharing' },
  { name: 'Discussions', link: '/discussions' },
];
const PROFILES: { name: string; link: string }[] = [
  { name: 'LeetCode', link: 'https://leetcode.com/Ritu84/' },
  { name: 'CodeChef', link: 'https://www.codechef.com/users/sharma_ritu' },
  { name: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/user/ritu84/' },
  { name: 'CodeForces', link: 'https://codeforces.com/profile/Deadly_' },
];

export default function Header() {
  return (
    <div>
    <header className="page-header space-y-1">
      <h1 className="text-xl font-medium tracking-tight">Ritu Sharma</h1>
      <p className="text-sm text-gray-500 tracking-tight">Software Engineer</p>
      <SocialsWrapper />
      <div className="!mt-8 text-sm">
        Currently working as a Software Developer at{' '}
        <Link href="https://ikyam.com/" target="_blank">
          Ikyam
        </Link>
      
        ,on a fintech product i.e., trading platform with high returns and profits. Working here as a FullStack developer.{' '}
        Also, worked with{' '}
        <Link href="https://www.finaccru.com/" target="_blank">
         Finaccru (an international firm)
        </Link>{' '}
        as a software engineering intern. Worked on building an innovative accounting platform.
      </div>
    </header>
    <div className="flex gap-2 items-center my-6">
      <h2 className="text-sm font-bold">Problem Solver <span role="img" aria-label="purple heart">💜</span>:</h2>
      {PROFILES.map((social, index) => {
        return (
          <React.Fragment key={index}>
            <Link
              href={social.link}
              target="_blank"
              className="text-sm">
              {social.name}
            </Link>
            {index !== PROFILES.length - 1 && (
              <span className="font-medium text-sm text-gray-300">/</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
    </div>
  );
}

function SocialsWrapper() {
  const { discussionCount } = useContext(GlobalContext);
  return (
    <div className="flex gap-2 items-center my-2">
      {SOCIALS.map((social, index) => {
        return (
          <React.Fragment key={index}>
            <Link
              href={social.link}
              target={social.name === 'Discussions' ? '_self' : '_blank'}
              className="text-sm">
              {social.name}
            </Link>
            {!!discussionCount &&
              social.name.toLowerCase() === 'discussions' && (
                <p className="discussionCount-badge text-xs font-medium px-1.5 py-0.5 rounded bg-gray-200">
                  {discussionCount}
                </p>
              )}
            {index !== SOCIALS.length - 1 && (
              <span className="font-medium text-sm text-gray-300">/</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
