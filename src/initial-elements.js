import React from "react";
import { MarkerType, Position } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "heading",
    data: {},
    position: { x: 596, y: 339 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "2",
    type: "userinterface",
    data: {},
    position: { x: 648, y: 113 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
  },
  {
    id: "3",
    type: "creatorstudio",
    data: {
      label: "Output Node",
    },
    position: { x: 234, y: -192 },
    sourcePosition: Position.Bottom,

  },
  {
    id: "4",
    type: "marketplace",
    position: { x: 834, y: -192 },
    data: {},
    sourcePosition: Position.Bottom,

  },
  {
    id: "5",
    type: "reward",
    data: {},
    position: { x: 532, y: -414 },
    sourcePosition: Position.Bottom,
  },
  {
    id: "6",
    type: "solana",
    data: {},
    position: { x: 290, y: 462 },
    targetPosition: Position.Bottom,
    targetPosition: Position.Right,
  },
  {
    id: "7",
    type: "solanabody",
    data: {},
    position: { x: -204, y: 564 },
    sourcePosition: Position.Right,
  },
  {
    id: "8",
    type: "arweave",
    data: {},
    position: { x: 310, y: 238 },
    sourcePosition: Position.Target,
    targetPosition: Position.Left,
  },
  {
    id: "9",
    type: "arweavebody",
    data: {},
    position: { x: -204, y: 188 },
    sourcePosition: Position.Right,
  },
  {
    id: "10",
    type: "phantom",
    data: {},
    position: { x: 974, y: 238 },
    sourcePosition: Position.Left,
    sourcePosition: Position.Right,


  },
  {
    id: "11",
    type: "phantombody",
    data: {},
    position: { x: 1294, y: 182 },
    targetPosition: Position.Left,
  },
  {
    id: "13",
    type: "oracle",
    data: {},
    position: { x: 953, y: 462 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "14",
    type: "oraclebody",
    data: {},
    position: { x: 1294, y: 552 },
    targetPosition: Position.Left,
  },
  {
    id: "15",
    type: "database",
    data: {},
    position: { x: 632, y: 557 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "16",
    type: "databasebody",
    data: {},
    position: { x: 554, y: 832 },
    targetPosition: Position.Top,
  },
];

export const edges = [
  {
      "source": "2",
      "sourceHandle": "hdfuvfud",
      "target": "1",
      "targetHandle": "auud",
      "id": "reactflow__edge-2hdfuvfud-1auud"
  },
  {
      "source": "5",
      "sourceHandle": "ihfbvfieddd",
      "target": "2",
      "targetHandle": "hdfuvfudhfhhjgkvk",
      "id": "reactflow__edge-5ihfbvfieddd-2hdfuvfudhfhhjgkvk"
  },
  {
      "source": "3",
      "sourceHandle": "dhvdffff",
      "target": "2",
      "targetHandle": "hdfuvfudhfhhjgkvk",
      "id": "reactflow__edge-3dhvdffff-2hdfuvfudhfhhjgkvk"
  },
  {
      "source": "4",
      "sourceHandle": "dhvd5435",
      "target": "2",
      "targetHandle": "hdfuvfudhfhhjgkvk",
      "id": "reactflow__edge-4dhvd5435-2hdfuvfudhfhhjgkvk"
  },
  {
      "source": "9",
      "sourceHandle": "hdfuvf653565654ud",
      "target": "8",
      "targetHandle": "ihfbvfie34243",
      "id": "reactflow__edge-9hdfuvf653565654ud-8ihfbvfie34243"
  },
  {
      "source": "8",
      "sourceHandle": "dhvd34423",
      "target": "1",
      "targetHandle": "auud",
      "id": "reactflow__edge-8dhvd34423-1auud"
  },
  {
      "source": "10",
      "sourceHandle": "jhhgjhgfhjdhvd34423",
      "target": "1",
      "targetHandle": "auud",
      "id": "reactflow__edge-10jhhgjhgfhjdhvd34423-1auud"
  },
  {
      "source": "7",
      "sourceHandle": "hdegfe345fgsdfuvfud",
      "target": "6",
      "targetHandle": "ihfbvfie3424365",
      "id": "reactflow__edge-7hdegfe345fgsdfuvfud-6ihfbvfie3424365"
  },
  {
      "source": "1",
      "sourceHandle": "hdscb",
      "target": "6",
      "targetHandle": "dh656554vd34423",
      "id": "reactflow__edge-1hdscb-6dh656554vd34423"
  },
  {
      "source": "1",
      "sourceHandle": "hdscb",
      "target": "13",
      "targetHandle": "213123dhvd34423",
      "id": "reactflow__edge-1hdscb-13213123dhvd34423"
  },
  {
      "source": "1",
      "sourceHandle": "hdscb",
      "target": "15",
      "targetHandle": "ihfbvfie34243",
      "id": "reactflow__edge-1hdscb-15ihfbvfie34243"
  },
  {
      "source": "13",
      "sourceHandle": "435432dhvd34423",
      "target": "14",
      "targetHandle": "ihfb544434vfie34243",
      "id": "reactflow__edge-13435432dhvd34423-14ihfb544434vfie34243"
  },
  {
      "source": "10",
      "sourceHandle": "1111jhhgjhgfhjdhvd34423",
      "target": "11",
      "targetHandle": "jhhgjhgfhjdhvd34423",
      "id": "reactflow__edge-101111jhhgjhgfhjdhvd34423-11jhhgjhgfhjdhvd34423"
  },
  {
      "source": "15",
      "sourceHandle": "dreww34f34ghvd34423",
      "target": "16",
      "targetHandle": "34662534534dhvd34423",
      "id": "reactflow__edge-15dreww34f34ghvd34423-1634662534534dhvd34423"
  }
]
