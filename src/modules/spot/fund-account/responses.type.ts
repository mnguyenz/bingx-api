import { AccountTypeEnum, AssetTransferTypeEnum } from '~enums';
import { BaseResponse } from '~helpers/base.type';

// 1.
export type QueryAssetsResponse = {
    data?: {
        balances: SingleQueryAssetResponse[];
    };
} & BaseResponse;

export type SingleQueryAssetResponse = {
    asset: string;
    free: string;
    locked: string;
};

// 3.
export type AssetTransferRecordsResponse = {
    total: number;
    rows: SingleAssetTransferRecordResponse[];
};

export type SingleAssetTransferRecordResponse = {
    asset: string;
    amount: string;
    type: AssetTransferTypeEnum;
    status: string;
    tranId: number;
    timestamp: number;
};

// 6.
export type AssetOverviewResponse = {
    data: [
        {
            accountType: AccountTypeEnum;
            usdtBalance: string;
        }
    ];
};
