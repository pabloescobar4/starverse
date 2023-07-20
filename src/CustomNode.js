import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import { Box, Flex, Image, Text } from "rebass";
import { svg } from "./svg";

export const Heading = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "10px 0px",
            width: "300px",
            justifyContent: "center",
            boxShadow: "0px 0px 20px 1px rgb(0,0,0,0.3)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 50, textAlign: "center" }}>
            Star-Verse
          </Text>
          <Text
            sx={{
              fontSize: "12px",
              textAlign: "right",
              pr: "20px",
              fontStyle: "italic",
            }}
          >
            Architecture
          </Text>
        </Flex>
        <Handle type="target" position={Position.Top} id="auud" onConnect={(params) => console.log('handle onConnect', params)}/>
        <Handle type="source" position={Position.Bottom} id="hdscb" onConnect={(params) => console.log('handle onConnect', params)}/>
       

      </div>
    </>
  );
});

export const UserInterface = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "10px 0px",
            width: "200px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 22, textAlign: "center" }}>
            User Interface
          </Text>
          <Flex sx={{ alignItems: "center" }}>
            <Image
              width="50%"
              src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
            />
            <Flex sx={{ fontSize: "16px", flexDirection: "column" }}>
              Front-End <br /> <span style={{ fontWeight: 800 }}>REACT.JS</span>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Top} id="hdfuvfudhfhhjgkvk" onConnect={(params) => console.log('handle onConnect', params)}/>

        <Handle type="source" position={Position.Bottom} id="hdfuvfud" onConnect={(params) => console.log('handle onConnect', params)}/>
      </div>
    </>
  );
});

export const Solana = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "10px 10px",
            width: "250px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 22, textAlign: "center" }}>
            Blockchain (Solana)
          </Text>
          <Flex sx={{ alignItems: "center", gap: "20px" }}>
            <Image
              width="50%"
              src="https://cryptologos.cc/logos/solana-sol-logo.png"
            />
            <Text sx={{ fontSize: "16px", flexDirection: "column" }}>
              Solana Program Library -{" "}
              <span style={{ fontWeight: 600 }}>SPL</span>
            </Text>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Bottom} id="ihfbvfie3424365" onConnect={(params) => console.log('handle onConnect', params)}/>
        <Handle type="target" position={Position.Right} id="dh656554vd34423" onConnect={(params) => console.log('handle onConnect', params)} />
      </div>
    </>
  );
});

export const Arweave = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "10px 10px",
            width: "200px",
            gap: "10px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 22, textAlign: "center" }}>
            Storage
          </Text>
          <Flex sx={{ alignItems: "center", gap: "20px" }}>
            <Image
              width="30%"
              src="https://cryptologos.cc/logos/arweave-ar-logo.png"
            />
            <Flex sx={{ fontSize: "16px", flexDirection: "column" }}>
              IPFS or
              <span style={{ fontWeight: 600 }}>Arweave</span>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Left} id="ihfbvfie34243" onConnect={(params) => console.log('handle onConnect', params)}/>
        <Handle type="source" position={Position.Right} id="dhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />
      </div>
    </>
  );
});

export const Phantom = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "10px 10px",
            width: "200px",
            gap: "10px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 22, textAlign: "center" }}>
            Wallet
          </Text>
          <Flex sx={{ alignItems: "center", gap: "20px" }}>
            <Image
              width="30%"
              src="https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format"
            />
            <Flex sx={{ fontSize: "16px", flexDirection: "column" }}>
              <span style={{ fontWeight: 600 }}>Phantom</span>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Left} id="jhhgjhgfhjdhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />
        <Handle type="source" position={Position.Right} id="1111jhhgjhgfhjdhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />


      </div>
    </>
  );
});

export const PythNetwork = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "15px 10px",
            width: "250px",
            gap: "10px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 22, textAlign: "center" }}>
            Oracle
          </Text>
          <Flex sx={{ alignItems: "center", gap: "20px" }}>
            <Image
              width="30%"
              src="https://s6-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/026/500/original/pyth_logo_lockup_dark.png?1670931557"
            />
            <Flex sx={{ fontSize: "16px", flexDirection: "column" }}>
              Chainlink or
              <span style={{ fontWeight: 600 }}>Pyth Network </span>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Left} id="213123dhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />
        <Handle type="source" position={Position.Right} id="435432dhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />

      </div>
    </>
  );
});

export const Database = memo(({ id, data }) => {
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            padding: "10px 10px",
            width: "250px",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
          }}
        >
          <Text sx={{ fontWeight: 900, fontSize: 22, textAlign: "center" }}>
            Database
          </Text>
          <Flex sx={{ alignItems: "center", gap: "20px", m: "auto" }}>
            <Image
              width="15%"
              src="https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png"
            />
            <Flex sx={{ fontSize: "16px", flexDirection: "column" }}>
              PostgreSQL or
              <span style={{ fontWeight: 600 }}>MongoDB</span>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Top} id="ihfbvfie34243" onConnect={(params) => console.log('handle onConnect', params)}/>
        <Handle type="source" position={Position.Bottom} id="dreww34f34ghvd34423" onConnect={(params) => console.log('handle onConnect', params)} />
      </div>
    </>
  );
});

export const CreatorStudio = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>Creator Studio</Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            <Image
              sx={{
                cursor: "pointer",
                // "&:hover": {
                //   transform: "scale(3)",
                //   transformOrigin: "100% 50%",
                // },
                // transition: "transform 0.25s",
                // transformOrigin: "100% 50%",
              }}
              width="100%"
              src="https://aloy.ai/feature01.png"
            />
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                A tool for creators to design and define their NFTs.
              </Flex>
              <Box sx={{ fontSize: "16px", display: expand ? "flex" : "none" }}>
                These are the features to be included: <br /> <br />
                1. NFT Creation Tool
                <br />
                2. NFT Management Dashboard <br />
                3. Royalties and Rewards Setup <br />
                4. Event Ticketing Tool <br />
                5. Verse Builder <br />
                6. Integration with Wallets
              </Box>{" "}
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Bottom} id="dhvdffff" onConnect={(params) => console.log('handle onConnect', params)} />

      </div>
    </>
  );
});

export const MarketPlace = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>Marketplace</Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            <Image
              sx={{
                cursor: "pointer",
                // "&:hover": {
                //   transform: "scale(3)",
                //   transformOrigin: "100% 50%",
                // },
                // transition: "transform 0.25s",
                // transformOrigin: "100% 50%",
              }}
              width="100%"
              src="https://forkast.news/wp-content/uploads/2022/01/LooksRare2.png"
            />
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                A place for creators to sell their NFTs and for audiences and
                brands to buy them.
              </Flex>
              <Box sx={{ fontSize: "16px", display: expand ? "flex" : "none" }}>
                These are the features to be included: <br /> <br />
                1. NFT Listings
                <br />
                2. NFT Details Page <br />
                3. Buy and Bid Options <br />
                4. Shopping Cart and Checkout <br />
                5. Creator Profiles <br />
                6. Event Ticket Purchases
              </Box>{" "}
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Bottom} id="dhvd5435" onConnect={(params) => console.log('handle onConnect', params)} />

      </div>
    </>
  );
});

export const Royalties = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>
              Rewards and Royalties
            </Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            <Image
              sx={{
                cursor: "pointer",
                // "&:hover": {
                //   transform: "scale(3)",
                //   transformOrigin: "100% 50%",
                // },
                // transition: "transform 0.25s",
                // transformOrigin: "100% 50%",
              }}
              width="100%"
              src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
            />
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                A system for distributing rewards and royalties to creators and
                stakeholders.
              </Flex>
              <Box sx={{ fontSize: "16px", display: expand ? "flex" : "none" }}>
                1. Rewards could be in the form of tokens, discounts, or special
                access rights. <br /> 2. Exclusive access to exclusive content.{" "}
                <br />
                3. Early access to new releases <br /> 4. VIP access at an
                event.
              </Box>{" "}
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Bottom} id="ihfbvfieddd" onConnect={(params) => console.log('handle onConnect', params)}/>
      </div>
    </>
  );
});

export const SolanaBody = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>
              Smart Contracts
            </Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            {/* <Image
              sx={{
                cursor: "pointer",
                // "&:hover": {
                //   transform: "scale(3)",
                //   transformOrigin: "100% 50%",
                // },
                // transition: "transform 0.25s",
                // transformOrigin: "100% 50%",
              }}
              width="100%"
              src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
            /> */}
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                These will be written in Rust or C and deployed on the Solana
                blockchain. They will handle all the business logic, including
                creating and managing NFTs, handling transactions, managing
                event ticket purchases, access control, rewards, and royalties.
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Right} id="hdegfe345fgsdfuvfud" onConnect={(params) => console.log('handle onConnect', params)}/>

      </div>
    </>
  );
});

export const SolanaSPLBody = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>
              Identity and Access Management
            </Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            {/* <Image
                sx={{
                  cursor: "pointer",
                  // "&:hover": {
                  //   transform: "scale(3)",
                  //   transformOrigin: "100% 50%",
                  // },
                  // transition: "transform 0.25s",
                  // transformOrigin: "100% 50%",
                }}
                width="100%"
                src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
              /> */}
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                To manage user access and permissions, you can use Solana's own
                SPL. It allows you to create and manage on-chain identities.
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Bottom} id="1" />
      </div>
    </>
  );
});

export const ArweaveBody = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>Arweave</Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            {/* <Image
                sx={{
                  cursor: "pointer",
                  // "&:hover": {
                  //   transform: "scale(3)",
                  //   transformOrigin: "100% 50%",
                  // },
                  // transition: "transform 0.25s",
                  // transformOrigin: "100% 50%",
                }}
                width="100%"
                src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
              /> */}
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                For storing large files associated with the NFTs, such as
                images, videos, or 3D models, you can use Arweave or IPFS. Both
                are decentralized storage systems, but Arweave might be a better
                fit with Solana due to existing integrations.
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="source" position={Position.Right} id="hdfuvf653565654ud" onConnect={(params) => console.log('handle onConnect', params)}/>

      </div>
    </>
  );
});

export const PhantomBody = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>Phantom</Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            {/* <Image
                  sx={{
                    cursor: "pointer",
                    // "&:hover": {
                    //   transform: "scale(3)",
                    //   transformOrigin: "100% 50%",
                    // },
                    // transition: "transform 0.25s",
                    // transformOrigin: "100% 50%",
                  }}
                  width="100%"
                  src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
                /> */}
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                Phantom is a popular cryptocurrency wallet designed specifically
                for the Solana blockchain. It allows users to easily manage
                their Solana (SOL) tokens and any SPL (Solana Program Library)
                tokens, which include various cryptocurrencies and NFTs
                (Non-Fungible Tokens) built on Solana.
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Left} id="jhhgjhgfhjdhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />

      </div>
    </>
  );
});

export const PythNetworkBody = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>Pyth-Network</Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            {/* <Image
                    sx={{
                      cursor: "pointer",
                      // "&:hover": {
                      //   transform: "scale(3)",
                      //   transformOrigin: "100% 50%",
                      // },
                      // transition: "transform 0.25s",
                      // transformOrigin: "100% 50%",
                    }}
                    width="100%"
                    src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
                  /> */}
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                Pyth Network will serve several purposes: <br />
                1. Price Feeds
                <br />
                2. Real-World Data
                <br />
                3. Randomness
                <br />
                4. Cross-Chain Communication
                <br />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Left} id="ihfb544434vfie34243" onConnect={(params) => console.log('handle onConnect', params)}/>
      </div>
    </>
  );
});

export const DatabaseBody = memo(({ id, data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="custom-node__select">
        <Flex
          sx={{
            fontFamily: "Montserrat",
            backgroundColor: "white",
            flexDirection: "column",
            border: "1px solid black",
            borderRadius: "4px",
            gap: "20px",
            padding: "20px 20px",
            width: expand ? "900px" : "400px",
            justifyContent: "space-between",
            boxShadow: "0px 0px 5px 0px rgb(32,35,41,0.5)",
            transition: "width 0.15s",
          }}
        >
          <Flex
            sx={{
              fontWeight: 900,
              fontSize: 18,
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <Flex sx={{ borderBottom: "1px solid black" }}>MongoDB</Flex>{" "}
            <Flex
              onClick={() => setExpand((c) => !c)}
              height="1em"
              sx={{
                m: "auto 0px",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.2)",
                },
                transition: "transform 0.25s",
              }}
            >
              {svg.expand}
            </Flex>
          </Flex>
          <Flex sx={{ gap: "20px" }}>
            {/* <Image
                      sx={{
                        cursor: "pointer",
                        // "&:hover": {
                        //   transform: "scale(3)",
                        //   transformOrigin: "100% 50%",
                        // },
                        // transition: "transform 0.25s",
                        // transformOrigin: "100% 50%",
                      }}
                      width="100%"
                      src="https://academy-public.coinmarketcap.com/optimized-uploads/9437b4cfdf884c61ab7bfc6628319d4a.png"
                    /> */}
            <Flex sx={{ flexDirection: "column", gap: "10px" }}>
              <Flex
                sx={{
                  fontSize: "16px",
                  flexDirection: "column",
                  fontWeight: expand ? 800 : 500,
                }}
              >
                For off-chain data that doesn't need to be stored on the
                blockchain, you can use a traditional database like PostgreSQL
                or a NoSQL database like MongoDB. This could be used to store
                user profiles, transaction history, and other data that can help
                improve the user experience.
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Handle type="target" position={Position.Top} id="34662534534dhvd34423" onConnect={(params) => console.log('handle onConnect', params)} />

      </div>
    </>
  );
});
