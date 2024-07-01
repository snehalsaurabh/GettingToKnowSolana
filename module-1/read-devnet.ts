import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balance} lamports`); 
console.log(`The balance of the account at ${address} is ${balanceInSol} lamports`); 
console.log(`✅ Finished!`)

/* Notes 
You will need to change the address given here by creating an address on the Solana devnet by using the following command: 
1. solana-keygen grind --starts-with Snehal:1
2. solana config set -k <the given address.json>
*/