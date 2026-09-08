import type { Block } from '@/lib/types';
import styles from './Prose.module.css';

/**
 * Renders authored blocks. Every text-bearing element gets `data-speech` so the
 * read-aloud control can walk the section in reading order and highlight the
 * chunk it is currently speaking.
 */
export default function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'h':
            return (
              <h3 key={i} data-speech>
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j} data-speech>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j} data-speech>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case 'note':
            return (
              <aside key={i} className={styles.note}>
                <p className="eyebrow eyebrow-accent" data-speech>
                  {block.label}
                </p>
                <p data-speech>{block.text}</p>
              </aside>
            );
          case 'p':
          default:
            return (
              <p key={i} data-speech>
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
