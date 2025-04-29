'use client';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Block as BlockType } from '@/types/editor';
import Block from './Block';

export default function Editor() {
  const [blocks, setBlocks] = useState<BlockType[]>([
    {
      id: uuidv4(),
      type: 'paragraph',
      content: 'Start typing here...',
    },
  ]);
  const [focusId, setFocusId] = useState<string | null>(null);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Register block refs
  const registerBlockRef = (id: string) => (element: HTMLDivElement | null) => {
    blockRefs.current[id] = element;
  };

  // Focus on block when focusId changes
  useEffect(() => {
    if (focusId && blockRefs.current[focusId]) {
      const element = blockRefs.current[focusId];
      element?.focus();
      
      // Place cursor at the beginning of the new block
      const selection = window.getSelection();
      const range = document.createRange();
      if (element && element.firstChild) {
        range.setStart(element.firstChild, 0);
      } else if (element) {
        range.setStart(element, 0);
      }
      range.collapse(true);
      selection?.removeAllRanges();
      selection?.addRange(range);
      
      // Clear focus ID after focusing
      setFocusId(null);
    }
  }, [focusId]);

  const handleBlockChange = (id: string, content: string) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, content } : block
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    // Get the current content from the event target
    const content = (e.target as HTMLDivElement).textContent || '';
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      
      // Save the content of the current block first
      handleBlockChange(id, content);
      
      // Create new block with a new ID
      const newBlockId = uuidv4();
      const newBlock: BlockType = {
        id: newBlockId,
        type: 'paragraph',
        content: '',
      };

      setBlocks((prev) => {
        const currentIndex = prev.findIndex((block) => block.id === id);
        const newBlocks = [...prev];
        newBlocks.splice(currentIndex + 1, 0, newBlock);
        return newBlocks;
      });
      
      // Set focus ID to the new block
      setFocusId(newBlockId);
    }

    // Handle slash commands
    if (e.key === '/' && !e.shiftKey) {
      // TODO: Implement slash command menu
      console.log('Slash command triggered');
    }

    // Handle backspace on empty block
    if (e.key === 'Backspace' && content === '') {
      e.preventDefault();
      setBlocks((prev) => {
        if (prev.length === 1) return prev; // Don't delete the last block
        
        // Find the index of the current block
        const currentIndex = prev.findIndex((block) => block.id === id);
        
        // If not the first block, focus the previous block
        if (currentIndex > 0) {
          setFocusId(prev[currentIndex - 1].id);
        }
        
        return prev.filter((block) => block.id !== id);
      });
    }
  };

  return (
    <div className="max-w-2xl w-full h-full mt-28 items-center justify-center px-3 py-2">
      {blocks.map((block) => (
        <Block
          key={block.id}
          block={block}
          onChange={handleBlockChange}
          onKeyDown={handleKeyDown}
          ref={registerBlockRef(block.id)}
        />
      ))}
    </div>
  );
} 