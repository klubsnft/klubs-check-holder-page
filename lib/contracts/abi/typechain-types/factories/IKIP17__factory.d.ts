import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP17, IKIP17Interface } from "../IKIP17";
export declare class IKIP17__factory {
    static readonly abi: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    static createInterface(): IKIP17Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP17;
}
//# sourceMappingURL=IKIP17__factory.d.ts.map