'use client';

import { useState, useRef, forwardRef, useEffect } from 'react';
import { Block as BlockType } from '@/types/editor';

interface BlockProps {
  block: BlockType;
  onChange: (id: string, content: string) => void;
  onKeyDown: (e: React.KeyboardEvent, id: string) => void;
}

const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({ block, onChange, onKeyDown }, ref) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const localRef = useRef<HTMLDivElement>(null);

    const getBlockStyle = () => {
      switch (block.type) {
        case 'heading-1':
          return 'text-4xl font-bold';
        case 'heading-2':
          return 'text-3xl font-bold';
        case 'heading-3':
          return 'text-2xl font-bold';
        case 'bullet-list':
          return 'list-disc ml-6';
        case 'numbered-list':
          return 'list-decimal ml-6';
        default:
          return 'text-base';
      }
    };

    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        contentEditable
        suppressContentEditableWarning
        className={`outline-none px-4 py-1 my-1 rounded-sm hover:bg-gray-100/50 focus:bg-gray-100/50 transition-colors ${getBlockStyle()}`}
        onFocus={() => setIsEditing(true)}
        onBlur={(e) => {
          onChange(block.id, e.currentTarget.textContent || '');
          setIsEditing(false);
        }}
        onKeyDown={(e) => onKeyDown(e, block.id)}
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    );
  }
);

Block.displayName = 'Block';

export default Block; 