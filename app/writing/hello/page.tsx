'use client';
import Image from 'next/image';
import { WritingContainer } from '../_components/writing-container';
import { WritingContent } from '../_components/writing-content';
import {
  WritingDetails,
  WritingHeader,
  WritingHeadline,
} from '../_components/writing-header';
import { cn } from '@/helpers';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const IMAGES: { file: string; description: string }[] = [
  {
    file: 'meeee.jpg',
    description: 'just sunning hehehe',
  },
  {
    file: 'setup-work.jpg',
    description: 'a random desktop click',
  },
  {
    file: 'sunset.jpg',
    description: 'sunset at the beach',
  },
  {
    file: 'desk-cutie-astro.jpg',
    description: 'my desk cutie',
  },
  {
    file: 'foot.jpg',
    description: 'random',
  },
  {
    file: 'authentic-food.jpg',
    description: 'treid some authentic andhra food, blr',
  },
];

export default function PostHello() {
  return (
    <>
      <WritingContainer id="post__hello">
        <WritingHeader>
          <WritingHeadline>hello there!</WritingHeadline>
          <WritingDetails>wednesday, 30st Oct, 2024</WritingDetails>
        </WritingHeader>
        <WritingContent>
          <p>
          hello, i&apos;m ritu, and welcome to my portfolio. This space is a reflection of everything i enjoy building, breaking, and learning—especially around tech. i&apos;ve kept things simple and uncluttered, like an open notebook where ideas can take shape.
          </p>
          <p>
          recently, i&apos;ve been diving deep into full-stack development, engineering scalable backend systems, and experimenting with things like custom document storage solutions and interactive dashboards. my current toolkit revolves around javascript, typescript, react, node.js, and a sprinkle of mongo and redux.
          </p>
          <p>
          this site is where i&apos;ll share snippets from my work, projects i&apos;m excited about, and thoughts from the trenches—whether it&apos;s a tricky bug i squashed, a design decision that changed everything, or just something that made the process more human. you might also stumble across the occasional playlist or a quote i&apos;m obsessing over and i hope you
            find something you like. thanks for stopping by!
          </p>
        </WritingContent>
      </WritingContainer>
      <div className="collage-wrapper flex justify-center gap-4 mt-12 max-md:hidden flex-wrap w-[90%] mx-auto">
        {IMAGES.map((image, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <motion.div
                    initial={{ filter: `blur(${index % 2 === 0 ? 3 : 6}px)` }}
                    animate={{ filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.6,
                    }}>
                    <Image
                      src={`/media/${image.file}`}
                      alt={image.file}
                      width={300}
                      height={500}
                      draggable={false}
                      className={cn(
                        'w-full h-[240px] rounded-3xl shadow-xl select-none',
                      )}
                    />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-black/80 text-white rounded-lg p-1 px-2">
                  {image.description}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </>
  );
}
