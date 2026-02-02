import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model subject
 *
 */
export type subjectModel = runtime.Types.Result.DefaultSelection<Prisma.$subjectPayload>;
export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
export type SubjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectCountAggregateOutputType = {
    id: number;
    name: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubjectMinAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectCountAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which subject to aggregate.
     */
    where?: Prisma.subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: Prisma.subjectOrderByWithRelationInput | Prisma.subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subjects
    **/
    _count?: true | SubjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType;
};
export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubject[P]> : Prisma.GetScalarType<T[P], AggregateSubject[P]>;
};
export type subjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subjectWhereInput;
    orderBy?: Prisma.subjectOrderByWithAggregationInput | Prisma.subjectOrderByWithAggregationInput[];
    by: Prisma.SubjectScalarFieldEnum[] | Prisma.SubjectScalarFieldEnum;
    having?: Prisma.subjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
};
export type SubjectGroupByOutputType = {
    id: string;
    name: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
};
type GetSubjectGroupByPayload<T extends subjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectGroupByOutputType[P]>;
}>>;
export type subjectWhereInput = {
    AND?: Prisma.subjectWhereInput | Prisma.subjectWhereInput[];
    OR?: Prisma.subjectWhereInput[];
    NOT?: Prisma.subjectWhereInput | Prisma.subjectWhereInput[];
    id?: Prisma.StringFilter<"subject"> | string;
    name?: Prisma.StringFilter<"subject"> | string;
    categoryId?: Prisma.StringFilter<"subject"> | string;
    createdAt?: Prisma.DateTimeFilter<"subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"subject"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.categoryWhereInput>;
    tutor_subject?: Prisma.Tutor_subjectListRelationFilter;
};
export type subjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.categoryOrderByWithRelationInput;
    tutor_subject?: Prisma.tutor_subjectOrderByRelationAggregateInput;
};
export type subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name_categoryId?: Prisma.subjectNameCategoryIdCompoundUniqueInput;
    AND?: Prisma.subjectWhereInput | Prisma.subjectWhereInput[];
    OR?: Prisma.subjectWhereInput[];
    NOT?: Prisma.subjectWhereInput | Prisma.subjectWhereInput[];
    name?: Prisma.StringFilter<"subject"> | string;
    categoryId?: Prisma.StringFilter<"subject"> | string;
    createdAt?: Prisma.DateTimeFilter<"subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"subject"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.categoryWhereInput>;
    tutor_subject?: Prisma.Tutor_subjectListRelationFilter;
}, "id" | "name_categoryId">;
export type subjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.subjectCountOrderByAggregateInput;
    _max?: Prisma.subjectMaxOrderByAggregateInput;
    _min?: Prisma.subjectMinOrderByAggregateInput;
};
export type subjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.subjectScalarWhereWithAggregatesInput | Prisma.subjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.subjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subjectScalarWhereWithAggregatesInput | Prisma.subjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"subject"> | string;
    name?: Prisma.StringWithAggregatesFilter<"subject"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"subject"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"subject"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"subject"> | Date | string;
};
export type subjectCreateInput = {
    id: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.categoryCreateNestedOneWithoutSubjectInput;
    tutor_subject?: Prisma.tutor_subjectCreateNestedManyWithoutSubjectInput;
};
export type subjectUncheckedCreateInput = {
    id: string;
    name: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor_subject?: Prisma.tutor_subjectUncheckedCreateNestedManyWithoutSubjectInput;
};
export type subjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.categoryUpdateOneRequiredWithoutSubjectNestedInput;
    tutor_subject?: Prisma.tutor_subjectUpdateManyWithoutSubjectNestedInput;
};
export type subjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_subject?: Prisma.tutor_subjectUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type subjectCreateManyInput = {
    id: string;
    name: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type subjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectListRelationFilter = {
    every?: Prisma.subjectWhereInput;
    some?: Prisma.subjectWhereInput;
    none?: Prisma.subjectWhereInput;
};
export type subjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type subjectNameCategoryIdCompoundUniqueInput = {
    name: string;
    categoryId: string;
};
export type subjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type subjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type subjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectScalarRelationFilter = {
    is?: Prisma.subjectWhereInput;
    isNot?: Prisma.subjectWhereInput;
};
export type subjectCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.subjectCreateWithoutCategoryInput, Prisma.subjectUncheckedCreateWithoutCategoryInput> | Prisma.subjectCreateWithoutCategoryInput[] | Prisma.subjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subjectCreateOrConnectWithoutCategoryInput | Prisma.subjectCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.subjectCreateManyCategoryInputEnvelope;
    connect?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
};
export type subjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.subjectCreateWithoutCategoryInput, Prisma.subjectUncheckedCreateWithoutCategoryInput> | Prisma.subjectCreateWithoutCategoryInput[] | Prisma.subjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subjectCreateOrConnectWithoutCategoryInput | Prisma.subjectCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.subjectCreateManyCategoryInputEnvelope;
    connect?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
};
export type subjectUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.subjectCreateWithoutCategoryInput, Prisma.subjectUncheckedCreateWithoutCategoryInput> | Prisma.subjectCreateWithoutCategoryInput[] | Prisma.subjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subjectCreateOrConnectWithoutCategoryInput | Prisma.subjectCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.subjectUpsertWithWhereUniqueWithoutCategoryInput | Prisma.subjectUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.subjectCreateManyCategoryInputEnvelope;
    set?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    disconnect?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    delete?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    connect?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    update?: Prisma.subjectUpdateWithWhereUniqueWithoutCategoryInput | Prisma.subjectUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.subjectUpdateManyWithWhereWithoutCategoryInput | Prisma.subjectUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.subjectScalarWhereInput | Prisma.subjectScalarWhereInput[];
};
export type subjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.subjectCreateWithoutCategoryInput, Prisma.subjectUncheckedCreateWithoutCategoryInput> | Prisma.subjectCreateWithoutCategoryInput[] | Prisma.subjectUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.subjectCreateOrConnectWithoutCategoryInput | Prisma.subjectCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.subjectUpsertWithWhereUniqueWithoutCategoryInput | Prisma.subjectUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.subjectCreateManyCategoryInputEnvelope;
    set?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    disconnect?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    delete?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    connect?: Prisma.subjectWhereUniqueInput | Prisma.subjectWhereUniqueInput[];
    update?: Prisma.subjectUpdateWithWhereUniqueWithoutCategoryInput | Prisma.subjectUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.subjectUpdateManyWithWhereWithoutCategoryInput | Prisma.subjectUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.subjectScalarWhereInput | Prisma.subjectScalarWhereInput[];
};
export type subjectCreateNestedOneWithoutTutor_subjectInput = {
    create?: Prisma.XOR<Prisma.subjectCreateWithoutTutor_subjectInput, Prisma.subjectUncheckedCreateWithoutTutor_subjectInput>;
    connectOrCreate?: Prisma.subjectCreateOrConnectWithoutTutor_subjectInput;
    connect?: Prisma.subjectWhereUniqueInput;
};
export type subjectUpdateOneRequiredWithoutTutor_subjectNestedInput = {
    create?: Prisma.XOR<Prisma.subjectCreateWithoutTutor_subjectInput, Prisma.subjectUncheckedCreateWithoutTutor_subjectInput>;
    connectOrCreate?: Prisma.subjectCreateOrConnectWithoutTutor_subjectInput;
    upsert?: Prisma.subjectUpsertWithoutTutor_subjectInput;
    connect?: Prisma.subjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subjectUpdateToOneWithWhereWithoutTutor_subjectInput, Prisma.subjectUpdateWithoutTutor_subjectInput>, Prisma.subjectUncheckedUpdateWithoutTutor_subjectInput>;
};
export type subjectCreateWithoutCategoryInput = {
    id: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor_subject?: Prisma.tutor_subjectCreateNestedManyWithoutSubjectInput;
};
export type subjectUncheckedCreateWithoutCategoryInput = {
    id: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor_subject?: Prisma.tutor_subjectUncheckedCreateNestedManyWithoutSubjectInput;
};
export type subjectCreateOrConnectWithoutCategoryInput = {
    where: Prisma.subjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.subjectCreateWithoutCategoryInput, Prisma.subjectUncheckedCreateWithoutCategoryInput>;
};
export type subjectCreateManyCategoryInputEnvelope = {
    data: Prisma.subjectCreateManyCategoryInput | Prisma.subjectCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type subjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.subjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.subjectUpdateWithoutCategoryInput, Prisma.subjectUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.subjectCreateWithoutCategoryInput, Prisma.subjectUncheckedCreateWithoutCategoryInput>;
};
export type subjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.subjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.subjectUpdateWithoutCategoryInput, Prisma.subjectUncheckedUpdateWithoutCategoryInput>;
};
export type subjectUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.subjectScalarWhereInput;
    data: Prisma.XOR<Prisma.subjectUpdateManyMutationInput, Prisma.subjectUncheckedUpdateManyWithoutCategoryInput>;
};
export type subjectScalarWhereInput = {
    AND?: Prisma.subjectScalarWhereInput | Prisma.subjectScalarWhereInput[];
    OR?: Prisma.subjectScalarWhereInput[];
    NOT?: Prisma.subjectScalarWhereInput | Prisma.subjectScalarWhereInput[];
    id?: Prisma.StringFilter<"subject"> | string;
    name?: Prisma.StringFilter<"subject"> | string;
    categoryId?: Prisma.StringFilter<"subject"> | string;
    createdAt?: Prisma.DateTimeFilter<"subject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"subject"> | Date | string;
};
export type subjectCreateWithoutTutor_subjectInput = {
    id: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.categoryCreateNestedOneWithoutSubjectInput;
};
export type subjectUncheckedCreateWithoutTutor_subjectInput = {
    id: string;
    name: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type subjectCreateOrConnectWithoutTutor_subjectInput = {
    where: Prisma.subjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.subjectCreateWithoutTutor_subjectInput, Prisma.subjectUncheckedCreateWithoutTutor_subjectInput>;
};
export type subjectUpsertWithoutTutor_subjectInput = {
    update: Prisma.XOR<Prisma.subjectUpdateWithoutTutor_subjectInput, Prisma.subjectUncheckedUpdateWithoutTutor_subjectInput>;
    create: Prisma.XOR<Prisma.subjectCreateWithoutTutor_subjectInput, Prisma.subjectUncheckedCreateWithoutTutor_subjectInput>;
    where?: Prisma.subjectWhereInput;
};
export type subjectUpdateToOneWithWhereWithoutTutor_subjectInput = {
    where?: Prisma.subjectWhereInput;
    data: Prisma.XOR<Prisma.subjectUpdateWithoutTutor_subjectInput, Prisma.subjectUncheckedUpdateWithoutTutor_subjectInput>;
};
export type subjectUpdateWithoutTutor_subjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.categoryUpdateOneRequiredWithoutSubjectNestedInput;
};
export type subjectUncheckedUpdateWithoutTutor_subjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subjectCreateManyCategoryInput = {
    id: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type subjectUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_subject?: Prisma.tutor_subjectUpdateManyWithoutSubjectNestedInput;
};
export type subjectUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_subject?: Prisma.tutor_subjectUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type subjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SubjectCountOutputType
 */
export type SubjectCountOutputType = {
    tutor_subject: number;
};
export type SubjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor_subject?: boolean | SubjectCountOutputTypeCountTutor_subjectArgs;
};
/**
 * SubjectCountOutputType without action
 */
export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: Prisma.SubjectCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SubjectCountOutputType without action
 */
export type SubjectCountOutputTypeCountTutor_subjectArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tutor_subjectWhereInput;
};
export type subjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    tutor_subject?: boolean | Prisma.subject$tutor_subjectArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type subjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type subjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subject"]>;
export type subjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type subjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>;
export type subjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
    tutor_subject?: boolean | Prisma.subject$tutor_subjectArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type subjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
};
export type subjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.categoryDefaultArgs<ExtArgs>;
};
export type $subjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subject";
    objects: {
        category: Prisma.$categoryPayload<ExtArgs>;
        tutor_subject: Prisma.$tutor_subjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subject"]>;
    composites: {};
};
export type subjectGetPayload<S extends boolean | null | undefined | subjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subjectPayload, S>;
export type subjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectCountAggregateInputType | true;
};
export interface subjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subject'];
        meta: {
            name: 'subject';
        };
    };
    /**
     * Find zero or one Subject that matches the filter.
     * @param {subjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectFindUniqueArgs>(args: Prisma.SelectSubset<T, subjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectFindFirstArgs>(args?: Prisma.SelectSubset<T, subjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     *
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     *
     */
    findMany<T extends subjectFindManyArgs>(args?: Prisma.SelectSubset<T, subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Subject.
     * @param {subjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     *
     */
    create<T extends subjectCreateArgs>(args: Prisma.SelectSubset<T, subjectCreateArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Subjects.
     * @param {subjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends subjectCreateManyArgs>(args?: Prisma.SelectSubset<T, subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {subjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends subjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Subject.
     * @param {subjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     *
     */
    delete<T extends subjectDeleteArgs>(args: Prisma.SelectSubset<T, subjectDeleteArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Subject.
     * @param {subjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends subjectUpdateArgs>(args: Prisma.SelectSubset<T, subjectUpdateArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Subjects.
     * @param {subjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends subjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends subjectUpdateManyArgs>(args: Prisma.SelectSubset<T, subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {subjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends subjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Subject.
     * @param {subjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends subjectUpsertArgs>(args: Prisma.SelectSubset<T, subjectUpsertArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectCountArgs>(args?: Prisma.Subset<T, subjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Prisma.Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;
    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends subjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subjectGroupByArgs['orderBy'];
    } : {
        orderBy?: subjectGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subject model
     */
    readonly fields: subjectFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for subject.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__subjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.categoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoryDefaultArgs<ExtArgs>>): Prisma.Prisma__categoryClient<runtime.Types.Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tutor_subject<T extends Prisma.subject$tutor_subjectArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subject$tutor_subjectArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the subject model
 */
export interface subjectFieldRefs {
    readonly id: Prisma.FieldRef<"subject", 'String'>;
    readonly name: Prisma.FieldRef<"subject", 'String'>;
    readonly categoryId: Prisma.FieldRef<"subject", 'String'>;
    readonly createdAt: Prisma.FieldRef<"subject", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"subject", 'DateTime'>;
}
/**
 * subject findUnique
 */
export type subjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where: Prisma.subjectWhereUniqueInput;
};
/**
 * subject findUniqueOrThrow
 */
export type subjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where: Prisma.subjectWhereUniqueInput;
};
/**
 * subject findFirst
 */
export type subjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where?: Prisma.subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: Prisma.subjectOrderByWithRelationInput | Prisma.subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subjects.
     */
    cursor?: Prisma.subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subjects.
     */
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
/**
 * subject findFirstOrThrow
 */
export type subjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where?: Prisma.subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: Prisma.subjectOrderByWithRelationInput | Prisma.subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subjects.
     */
    cursor?: Prisma.subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subjects.
     */
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
/**
 * subject findMany
 */
export type subjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * Filter, which subjects to fetch.
     */
    where?: Prisma.subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: Prisma.subjectOrderByWithRelationInput | Prisma.subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subjects.
     */
    cursor?: Prisma.subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    distinct?: Prisma.SubjectScalarFieldEnum | Prisma.SubjectScalarFieldEnum[];
};
/**
 * subject create
 */
export type subjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a subject.
     */
    data: Prisma.XOR<Prisma.subjectCreateInput, Prisma.subjectUncheckedCreateInput>;
};
/**
 * subject createMany
 */
export type subjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: Prisma.subjectCreateManyInput | Prisma.subjectCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * subject createManyAndReturn
 */
export type subjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * The data used to create many subjects.
     */
    data: Prisma.subjectCreateManyInput | Prisma.subjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * subject update
 */
export type subjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a subject.
     */
    data: Prisma.XOR<Prisma.subjectUpdateInput, Prisma.subjectUncheckedUpdateInput>;
    /**
     * Choose, which subject to update.
     */
    where: Prisma.subjectWhereUniqueInput;
};
/**
 * subject updateMany
 */
export type subjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: Prisma.XOR<Prisma.subjectUpdateManyMutationInput, Prisma.subjectUncheckedUpdateManyInput>;
    /**
     * Filter which subjects to update
     */
    where?: Prisma.subjectWhereInput;
    /**
     * Limit how many subjects to update.
     */
    limit?: number;
};
/**
 * subject updateManyAndReturn
 */
export type subjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * The data used to update subjects.
     */
    data: Prisma.XOR<Prisma.subjectUpdateManyMutationInput, Prisma.subjectUncheckedUpdateManyInput>;
    /**
     * Filter which subjects to update
     */
    where?: Prisma.subjectWhereInput;
    /**
     * Limit how many subjects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * subject upsert
 */
export type subjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the subject to update in case it exists.
     */
    where: Prisma.subjectWhereUniqueInput;
    /**
     * In case the subject found by the `where` argument doesn't exist, create a new subject with this data.
     */
    create: Prisma.XOR<Prisma.subjectCreateInput, Prisma.subjectUncheckedCreateInput>;
    /**
     * In case the subject was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.subjectUpdateInput, Prisma.subjectUncheckedUpdateInput>;
};
/**
 * subject delete
 */
export type subjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
    /**
     * Filter which subject to delete.
     */
    where: Prisma.subjectWhereUniqueInput;
};
/**
 * subject deleteMany
 */
export type subjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: Prisma.subjectWhereInput;
    /**
     * Limit how many subjects to delete.
     */
    limit?: number;
};
/**
 * subject.tutor_subject
 */
export type subject$tutor_subjectArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: Prisma.tutor_subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: Prisma.tutor_subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_subjectInclude<ExtArgs> | null;
    where?: Prisma.tutor_subjectWhereInput;
    orderBy?: Prisma.tutor_subjectOrderByWithRelationInput | Prisma.tutor_subjectOrderByWithRelationInput[];
    cursor?: Prisma.tutor_subjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tutor_subjectScalarFieldEnum | Prisma.Tutor_subjectScalarFieldEnum[];
};
/**
 * subject without action
 */
export type subjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: Prisma.subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the subject
     */
    omit?: Prisma.subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.subjectInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=subject.d.ts.map