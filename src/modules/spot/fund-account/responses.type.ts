import { AssetTransferTypeEnum } from '~enums';

export type AssetTransferRecordsResponse = {
    total: number;
    rows: SingleAssetTransferRecordResponse[];
};

export type SingleAssetTransferRecordResponse = {
    asset: string;
    amount: number;
    type: AssetTransferTypeEnum;
    status: string;
    tranId: bigint;
    timestamp: bigint;
};
