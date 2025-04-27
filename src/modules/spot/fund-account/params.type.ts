import { AccountTypeEnum, AssetTransferTypeEnum } from '~enums';

// 3.
export type AssetTransferRecordsParams = {
    type: AssetTransferTypeEnum;
};

// 6.
export type AssetOverviewParams = {
    accountType: AccountTypeEnum;
};
