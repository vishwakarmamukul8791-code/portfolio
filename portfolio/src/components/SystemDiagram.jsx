import { useId } from 'react'
export function ProjectMark({ kind, size = 28 }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'resolveiq' ? <><path d="M6 4h13l6 6v10M19 4v6h6M10 12h6M10 17h5"/><circle cx="20" cy="22" r="6"/><path d="m24.5 26.5 4 4M5 4v23h7"/></> : kind === 'paypilot' ? <><rect x="3" y="7" width="26" height="19" rx="4"/><path d="M3 13h26m-10 7 3 3 5-6M7 20h4M10 3h12"/></> : <><path d="M5 3h15l6 6v20H5zM20 3v7h6M10 23v-5m5 5V13m5 10v-7"/></>}
  </svg>
}
export default function SystemDiagram({ project }) {
  const id = useId().replace(/:/g, '')
  const node = (x, y, w, text, final = false) => <g><rect x={x} y={y} width={w} height="43" rx="7" fill={final ? '#254d43' : '#1c302b'} stroke={final ? '#81b7a4' : '#466258'}/><text x={x+w/2} y={y+26} fill="#eff7f3" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif">{text}</text></g>
  return <svg className="system-diagram" viewBox="0 0 420 306" role="img" aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc`}>
    <title id={`${id}-title`}>{project.name} architecture overview</title><desc id={`${id}-desc`}>{project.input}. {project.left} and {project.right} feed {project.center}. Output: {project.output}.</desc>
    <defs><marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="m1 1 6 3-6 3" fill="none" stroke="#86b7a5" strokeWidth="1.2"/></marker></defs>
    <g fill="none" stroke="#6f9587" strokeWidth="1.3" markerEnd={`url(#${id}-arrow)`}><path d="M210 57v20H107v22"/><path d="M210 77h103v22"/><path d="M107 145v22h103v24"/><path d="M313 145v22H210"/><path d="M210 236v22"/></g>
    {node(100,14,220,project.input)}{node(20,101,174,project.left)}{node(226,101,174,project.right)}{node(79,193,262,project.center)}{node(62,260,296,project.output,true)}
  </svg>
}
