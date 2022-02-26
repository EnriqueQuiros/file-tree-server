import { Request, Response } from "express";
import directoryTree from 'directory-tree';


const getPath = (path: string) => {
  const node = path || "";
  const slashedPath = node.replace(/~/g, '/');
  console.log("load path: ", slashedPath);
  return slashedPath;
}

export const getFileTree = (req: Request, res: Response) => {
  const tree = directoryTree('/' + getPath(req.params.path), {
    attributes: ["type", "extension"],
    normalizePath: true,
    depth: 2
  });
  return res.status(200).json(tree);
};

export const getFile = (req: Request, res: Response) => {
  return res.status(200).sendFile(getPath(req.params.path));
};
