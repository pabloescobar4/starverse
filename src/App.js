import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import {
  Arweave,
  ArweaveBody,
  CreatorStudio,
  Database,
  DatabaseBody,
  Heading,
  MarketPlace,
  Phantom,
  PhantomBody,
  PythNetwork,
  PythNetworkBody,
  Royalties,
  Solana,
  SolanaBody,
  SolanaSPLBody,
  UserInterface,
} from "./CustomNode";

import "reactflow/dist/style.css";
import { Flex } from "rebass";

const nodeTypes = {
  heading: Heading,
  userinterface: UserInterface,
  creatorstudio: CreatorStudio,
  marketplace: MarketPlace,
  reward: Royalties,
  solana: Solana,
  solanabody: SolanaBody,
  arweave: Arweave,
  arweavebody: ArweaveBody,
  phantom: Phantom,
  phantombody: PhantomBody,
  oracle: PythNetwork,
  oraclebody: PythNetworkBody,
  database: Database,
  databasebody: DatabaseBody,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
console.log(edges,"&&&&&&&&&&&&&&&&&")
  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    // if (edge.sourceHandle) {
    //   const edgeType = nodes.find((node) => node.type === "custom").data
    //     .selects[edge.sourceHandle];
    //   edge.type = edgeType;
    // }

    return edge;
  });
  console.log(nodes);

  return (
    <Flex
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f3f7ff",
        fontFamily: "Montserrat",
      }}
    >
      <ReactFlow
      minZoom={0.1}
        nodes={nodes}
         edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <Controls />
      </ReactFlow>
    </Flex>
  );
};

export default OverviewFlow;
