import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { skills } from '@/data/skills';

export function Skills() {
  return (
    <div id="skills">
      <h2 className="text-2xl font-bold mt-4 mb-1">Skills</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Skill</TableHead>
            <TableHead>Evidence</TableHead>
            <TableHead className="text-right">Proficiency</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.name}>
              <TableCell className="font-semibold">{skill.name}</TableCell>
              <TableCell>
                {skill.evidence.map(([txt, url], index) => (
                  <span className="text-xs text-muted-foreground" key={index}>
                    <a className={`underline-offset-2 ${url && 'underline'}`} href={url}>
                      {txt}
                    </a>
                    {index + 1 != skill.evidence.length && ', '}
                  </span>
                ))}
              </TableCell>
              <TableCell className="text-right">{skill.proficiency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
