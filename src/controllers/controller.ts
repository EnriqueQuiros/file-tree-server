import { Request, Response } from "express";
import directoryTree from 'directory-tree';

export const getFileTree = (req: Request,
  res: Response) => {

  const node = req.params.node || "";
  const path = node.replace(/~/g, '/');
  console.log("load path: ", path);

  const tree = directoryTree('/' + path, {
    attributes: ["type", "extension"],
    normalizePath: true,
    depth: 2
  });

  return res.status(200).json(tree);
};
