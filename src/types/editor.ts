export type BlockType = 
  | 'paragraph'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'bullet-list'
  | 'numbered-list';

export interface Block {
  id: string;
  type: BlockType;
  content: string;
} 