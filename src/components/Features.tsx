import React from 'react';
import { Wand2, Layout, Subtitles, Share2, Sparkles, Users } from 'lucide-react';

const features = [
  {
    name: 'ClipAnything™',
    description: 'Select and cut any moment from your videos using natural language prompts.',
    icon: Wand2,
  },
  {
    name: 'Auto Reframe',
    description: 'Automatically adjust clips for different aspect ratios while keeping the focus on what matters.',
    icon: Layout,
  },
  {
    name: 'AI Captions',
    description: '97%+ accurate animated captions in multiple styles and languages.',
    icon: Subtitles,
  },
  {
    name: 'Smart Publishing',
    description: 'Schedule and publish directly to all major social platforms.',
    icon: Share2,
  },
  {
    name: 'Virality Score',
    description: 'AI-powered analysis to predict and optimize your contents viral potential.',
    icon: Sparkles,
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with role-based access and real-time editing.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Faster editing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create viral content
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered tools help you create engaging content in minutes instead of hours.
            Focus on creativity while we handle the technical details.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}