import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection("http://localhost:8899");
/* Since Solana Devnet is currently down, this operation is being performed on the local net.
To perform operations on the local network, you would require the local test validator to remain open throughout the operation
*/

const address = new PublicKey('8M2fmnikD8X937rEht1zeHPRDFEKkMDk9JCCXmFpJCFJ');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balance} lamports`); 
console.log(`The balance of the account at ${address} is ${balanceInSol} lamports`); 
console.log(`✅ Finished!`)